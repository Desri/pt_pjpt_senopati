<template>
  <div>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div class="p-6 w-full bg-white rounded-xl shadow sm:max-w-md">
        <div class="p:4 sm:p-5">
          <div class="mb-9">
            <img src="/logo.png" class="w-32 mx-auto" />
          </div>
          <LoginMessage />
          <UForm :schema="schema" :state="state" class="space-y-4 login-form" @submit="onLogin">
            <UFormGroup label="Username" name="username">
              <UInput v-model="state.username" />
            </UFormGroup>
            <UFormGroup label="Password" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <p class="text-right">
              <NuxtLink to="/#" class="text-sm font-medium text-[#34ccff]">Forgot Password?</NuxtLink>
            </p>
            <UButton type="submit" class="w-full py-2.5 px-3 bg-[#183650] text-center block">
              <span v-if="!loading">
                Sign in
              </span>
              <span v-else>
                Loading<span class="dots"></span>
              </span>
            </UButton>
          </UForm>
          <p class="text-sm mt-3 text-gray-500 text-center">
            Don't have an account yet? <NuxtLink to="/#" class="font-medium text-[#34ccff]">Sign up</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'
  
  const router = useRouter()
  const store = useLoginStore()
  const loading = ref<boolean>(false)

  const schema = object({
    username: string().min(4, "Username must be at least 4 characters").required('Username is a required field'),
    password: string().min(4, "Password must be at least 4 characters").required('Password is a required field')
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    username: undefined,
    password: undefined
  })

  async function onLogin(event: FormSubmitEvent<Schema>) {
    loading.value = true
    await store.signIn(event.data)
    .then((res: any) => {
      loading.value = false
      if(res.success) {
        if (res.data.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/')
        } 
      }
    })
    .catch((err: string) => {
      console.log('error', err)
      loading.value = false
    })
  }
</script>

<style lang="scss">
  .text-red {
    color: #ff2929;
  }
  .login-form {
    label {
      color: #656565;
    }
    input {
      color: #414141;
      padding: 9px 12px;
      background: #ffffff;
      border: 1px solid #dfdfdf;
    }
    p {
      color: #ff2929;
      font-size: 12px;
      margin-top: 3px;
    }
  }
</style>

export default defineNuxtRouteMiddleware(async(to, from) => {
  const userStore = useLoginStore();

  if(userStore.token) {
    const role = userStore.token.role;
    if (role === 'admin' && to.path !== '/admin') {
      return navigateTo('/admin');
    } else if (role === 'employee' && to.path !== '/') {
      return navigateTo('/');
    }
  }
})

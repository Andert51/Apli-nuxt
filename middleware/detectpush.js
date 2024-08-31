import cookies from 'js-cookie'
export default function ({ route, redirect }) {
  if (route.path === '/') {
    if (cookies.get('token')) {
      cookies.remove('token')
    }
  }
  console.log('@Nint => Navigation to ', route.path)
}

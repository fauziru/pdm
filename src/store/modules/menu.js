const state = () => ({
  menuBottombar: [
    {link: '/home', icon: 'fa-home', text: 'Home'},
    {link: '/puasa', icon: 'fa-star-and-crescent', text: 'Puasa'}
  ]
})

export default {
  namespaced: true,
  state
}

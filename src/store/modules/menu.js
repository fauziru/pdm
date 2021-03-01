const state = () => ({
  menuBottombar: [
    {link: '/home', icon: 'fa-home', text: 'Home'},
    {link: '/puasa', icon: 'fa-star-and-crescent', text: 'Puasa'}
  ],
  keyPray: [
    {id: 'Imsak', en: 'Imsak'},
    {id: 'Subuh', en: 'Fajr'},
    {id: 'Zuhur', en: 'Dhuhr'},
    {id: 'Asar', en: 'Asr'},
    {id: 'Magrib', en: 'Maghrib'},
    {id: 'Isya', en: 'Isha'}
  ]
})

export default {
  namespaced: true,
  state
}

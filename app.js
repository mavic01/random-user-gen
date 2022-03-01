const app = Vue.createApp({
    data() {
      return {
        firstName: 'Claire',
        lastName: 'Smith',
        email: 'claire@gmail.com',
        gender: 'female',
        age: "25",
        picture: 'https://randomuser.me/api/portraits/women/10.jpg',
        state: "Chicago",
        country: "USA"
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
  
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
        this.age = results[0].dob.age
        this.state = results[0].location.state
        this.country = results[0].location.country
      },
    },
  })
  
  app.mount('#app')
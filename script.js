const vueApp= new Vue({
el: '#app',

data:function() {
    return{
        appName: 'User Ngewek',
        author: 'Mang Garrox',
        users:[{
            "id": 1,
            "name": "Colleen Sher",
            "email": "csher0@imgur.com",
            "gender": "Female"
          }, {
            "id": 2,
            "name": "Arne McKinty",
            "email": "amckinty1@amazon.com",
            "gender": "Male"
          }, {
            "id": 3,
            "name": "Blair Petera",
            "email": "bpetera2@ihg.com",
            "gender": "Female"
          }, {
            "id": 4,
            "name": "Adrian Goold",
            "email": "agoold3@histats.com",
            "gender": "Male"
          }, {
            "id": 5,
            "name": "Rudolph Budgey",
            "email": "rbudgey4@sitemeter.com",
            "gender": "Male"
          }],
          userUpdate:{},
          genders:[
            'Male','Female'
          ]
    }
},
computed: {
    appTitle(){
        return this.appName + 'by' + this.author
    }

},
methods:{
    edit(user){
        this.userUpdate = user
    },
    destroy(indexUser){
      let question = confirm('ilang lo iki')

      if(question){
        this.users.splice(indexUser,1)
      }

    }
}

})
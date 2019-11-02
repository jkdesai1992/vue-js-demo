<template>
  <div>
    <h1>update A Post</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>person name:</label>
            <input type="text" class="form-control" v-model="post.person_name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>business number:</label>
            <input type="text" class="form-control" v-model="post.business_gst_number">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>business name:</label>
            <input type="text" class="form-control" v-model="post.business_name">
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {

      }
    }
  },
  async created () {
    await axios.get(`http://localhost:4000/api/business/find/${this.$route.params.id}`).then(response => {
      if (response.data) {
        this.post = response.data[0]
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    async updatePost () {
      const obj = {
        person_name: this.post.person_name,
        business_name: this.post.business_name,
        business_gst_number: this.post.business_gst_number
      }
      await axios.put(`http://localhost:4000/api/business/update/${this.$route.params.id}`, obj).then(res => {
        if (res.data) {
          this.$router.push({path: '/show-business'})
        }
      }).catch(err => {
        console.log('err in deleting version : ', err)
      })
    }
  }
}
</script>

<style scoped>

</style>

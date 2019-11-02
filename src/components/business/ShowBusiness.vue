<template>
  <div>
    <h2>bussiness</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>person name</th>
        <th>business number</th>
        <th>business name</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(business, index) in businessList" :key="business._id">
        <td>{{business.business_name}}</td>
        <td>{{business.business_gst_number}}</td>
        <td>{{business.person_name}}</td>
        <td>
          <router-link :to="{name: 'update-business', params: { id: business._id, data: business }}" class="btn btn-primary">Edit</router-link>
        </td>
        <td>
          <button class="btn btn-danger" @click.prevent="deletePost(business._id, index)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      businessList: []
    }
  },
  created () {
    axios.get('http://localhost:4000/api/business').then(response => {
      if (response && response.data) {
        this.businessList = (response.data || [])
      }
    }).catch(function (error) {
      console.log(error)
    })
  },

  methods: {
    async deletePost (id, index) {
      await axios.delete(`http://localhost:4000/api/business/delete/${id}`).then(res => {
        if (res.status === 200) {
          console.log('delete', index)
          this.businessList.splice(index, 1)
        }
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>

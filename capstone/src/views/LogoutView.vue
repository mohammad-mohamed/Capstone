<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">User Profile</h2>
    </div>
    <div class="row my-4">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">User Details</h5>
            <p class="card-text"><strong>First Name:</strong> {{ userDetails?.firstName }}</p>
            <p class="card-text"><strong>Last Name:</strong> {{ userDetails?.lastName }}</p>
            <p class="card-text"><strong>Age:</strong> {{ userDetails?.userAge }}</p>
            <p class="card-text"><strong>Gender:</strong> {{ userDetails?.Gender }}</p>
            <p class="card-text"><strong>Email:</strong> {{ userDetails?.emailAdd }}</p>
            <p class="card-text"><strong>Profile:</strong> {{ userDetails?.userProfile }}</p>
            <button class="btn btn-primary mt-3" @click="logOut">Log Out</button>
            <button class="btn btn-secondary mt-3" @click="toggleEdit">Edit</button>
            <div v-if="isEditing">
              <form @submit.prevent="updateUserDetails">
                <div class="form-group">
                  <label for="firstName">First Name:</label>
                  <input type="text" class="form-control" id="firstName" v-model="editedUserDetails.firstName" />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name:</label>
                  <input type="text" class="form-control" id="lastName" v-model="editedUserDetails.lastName" />
                </div>
                <div class="form-group">
                  <label for="userAge">Age:</label>
                  <input type="number" class="form-control" id="userAge" v-model="editedUserDetails.userAge" />
                </div>
                <div class="form-group">
                  <label for="Gender">Gender:</label>
                  <select class="form-control" id="Gender" v-model="editedUserDetails.Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="emailAdd">Email:</label>
                  <input type="email" class="form-control" id="emailAdd" v-model="editedUserDetails.emailAdd" />
                </div>
                <div class="form-group">
                  <label for="userProfile">Profile:</label>
                  <textarea class="form-control" id="userProfile" v-model="editedUserDetails.userProfile"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies()

const store = useStore()

const isEditing = ref(false)
const editedUserDetails = ref({
  firstName: '',
  lastName: '',
  userAge: '',
  Gender: '',
  emailAdd: '',
  userProfile: ''
})

// Get the logged-in user's details from the state
const userDetails = computed(() => cookies.get('LegitUser')?.result)

function logOut() {
  console.log(cookies.get('verifiedUser')?.result);
  store.dispatch('logOut')
}

function toggleEdit() {
  isEditing.value = !isEditing.value
  if (isEditing.value) {
    editedUserDetails.value = { ...userDetails.value }
  }
}

function updateUserDetails() {
  // Call API or update Vuex state to update user details
  console.log('Update user details:', editedUserDetails.value)
  // Reset edit mode
  isEditing.value = false
}
</script>
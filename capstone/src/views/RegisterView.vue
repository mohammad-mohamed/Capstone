<template>
<!-- User Management -->
<div class="user-management">
  <h2>User Management</h2>
  <!-- Form to Add or Update a User -->
  <div class="user-form">
    <h3>{{ isEditingUser ? 'Edit User' : 'Add New User' }}</h3>
    <form @submit.prevent="isEditingUser ? updateUser() : addUser()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" v-model="userForm.firstName" required />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="userForm.lastName" required />
      </div>
      <div class="form-group">
        <label for="userAge">Age</label>
        <input type="number" v-model="userForm.userAge" required />
      </div>
      <div class="form-group">
        <label for="Gender">Gender</label>
        <input type="text" v-model="userForm.Gender" required />
      </div>
      <div class="form-group">
        <label for="emailAdd">Email</label>
        <input type="email" v-model="userForm.emailAdd" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="userForm.userPass" required />
      </div>
      <div class="form-group">
        <label for="userProfile">Profile</label>
        <textarea v-model="userForm.userProfile"></textarea>
      </div>
      <div class="form-actions">
        <button type="submit">{{ isEditingUser ? 'Update User' : 'Add User' }}</button>
        <button v-if="isEditingUser" type="button" @click="cancelEditUser">Cancel</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import sweet from 'sweetalert'

export default {
  setup() {
    const store = useStore();

    // User state and methods
    const userForm = ref({
      firstName: '',
      lastName: '',
      userAge: '',
      Gender: '',
      userRole: '',
      emailAdd: '',
      userPass: '',  
      userProfile: ''
    });
    const isEditingUser = ref(false);
    const editingUserId = ref(null);

    onMounted(() => {
      store.dispatch('fetchUsers');
    });

    const users = computed(() => store.getters.allUsers);

    const addUser = async () => {
      await store.dispatch('addUser', userForm.value);
      resetUserForm();
      sweet("User Added!", "The user has been successfully added.", "success");
    };

    const editUser = (user) => {
      userForm.value = { ...user };
      isEditingUser.value = true;
      editingUserId.value = user.userID;
    };

    const updateUser = async () => {
      await store.dispatch('updateUser', { ...userForm.value, userID: editingUserId.value });
      resetUserForm();
      sweet("User Updated!", "The user has been successfully updated.", "success");
    };

    const deleteUser = async (userID) => {
      await store.dispatch('deleteUser', userID);
      sweet("User Deleted!", "The user has been successfully deleted.", "success");
    };

    const cancelEditUser = () => {
      resetUserForm();
    };

    const resetUserForm = () => {
      userForm.value = {
        firstName: '',
        lastName: '',
        userAge: '',
        Gender: '',
        userRole: '',
        emailAdd: '',
        userPass: '',  
        userProfile: ''
      };
      isEditingUser.value = false;
      editingUserId.value = null;
    };

    return {
      userForm,
      users,
      isEditingUser,
      addUser,
      editUser,
      updateUser,
      deleteUser,
      cancelEditUser
    };
  }
};
</script>
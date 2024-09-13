<template>
<!-- User Management -->
<div class="user-management">
  <h2>Register Now</h2>
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
      <!-- <div class="form-group">
        <label for="userRole">Role</label>
        <input type="text" v-model="userForm.userRole" required />
      </div> -->
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
    <div class="user-actions">
          <button @click="editUser(user)">Edit</button>
          <!-- <button @click="deleteUser(user.userID)">Delete</button> -->
        </div>
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

<style scoped>
.admin-view {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  background-color: var(--light-grey-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

h1, h2 {
  text-align: center;
  color: var(--dark-color);
}

.product-management, .user-management {
  margin-bottom: 3rem;
}

.product-form, .user-form {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--dark-grey-color);
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--dark-grey-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background-color: var(--brown-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color var(--transition);
}

button:disabled {
  background-color: var(--dark-grey-color);
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: var(--dark-color);
}

.product-list, .user-list {
  margin-top: 2rem;
}

.product-card, .user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--white-color);
  border: 1px solid var(--dark-grey-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.product-info h4, .user-info h4 {
  margin: 0 0 0.5rem;
  color: var(--dark-color);
}

.product-actions button, .user-actions button {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .product-card, .user-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-actions, .user-actions {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>

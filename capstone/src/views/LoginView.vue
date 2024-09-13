<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Login</h2>
        </div>
        <div class="row my-2 justify-content-center">
            <form class="form" @submit.prevent="login">
                <div class="form-control-wrapper">
                    <span>Email address
                        <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd"
                            pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>Password
                        <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"
                            minlength="4" required />
                    </span>
                </div>
                <div class="form-control-wrapper d-md-flex d-block justify-content-end">
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
                <div class="form-control-wrapper">
                    <div class="account justify-content-between d-md-flex d-block">
                        <div class="item">
                            <button class="btn btn-success">Forgot Password</button>
                        </div>
                        <div class="item">
                            <button class="btn btn-dark">Sign up</button>
                        </div>
                    </div>
                </div>
                <router-link to="/register"><a href="">Don't have an account?</a></router-link>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const store = useStore()
/* Use reactive when defining a reference or dynamic data type.
And use ref for primitive data types
*/
const payload = reactive({
    emailAdd: '',
    userPass: ''
})
function login() {
    
    store.dispatch('login', {emailAdd : payload.emailAdd, userPass: payload.userPass})
}
</script>

<style>



h2.display-2 {
    font-size: 3.6rem;
    font-weight: 600;
    color: var(--dark-color);
    text-align: center;
    margin-bottom: 2rem;
}

.form {
    width: 100%;
}

.form-control-wrapper {
    margin-bottom: 1.5rem;
}

.form-control-wrapper span {
    display: block;
    font-size: 1.6rem;
    color: var(--dark-grey-color);
    margin-bottom: 0.5rem;
}

.form-control {
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid var(--dark-grey-color);
    border-radius: 5px;
    transition: var(--transition);
}

.form-control:focus {
    outline: none;
    border-color: var(--brown-color);
    box-shadow: 0px 0px 8px 0px rgba(239, 139, 89, 0.5);
}

.btn {
    padding: 0.8rem 2rem;
    font-size: 1.6rem;
    border-radius: 5px;
    transition: var(--transition);
}

.btn-success {
    background-color: var(--brown-color);
    color: var(--white-color);
}

.btn-success:hover {
    background-color: darken(var(--brown-color), 10%);
}

.btn-dark {
    background-color: var(--dark-color);
    color: var(--white-color);
}

.btn-dark:hover {
    background-color: lighten(var(--dark-color), 10%);
}

.account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.item {
    margin: 0.5rem 0;
}

.router-link a {
    color: var(--dark-color);
    text-align: center;
    display: block;
    margin-top: 2rem;
    font-size: 1.4rem;
}

.router-link a:hover {
    color: var(--brown-color);
}


</style>
<script setup>
    import { ref, onMounted } from "vue";
    import axios from "../services/axios.js";

    const allUsers = ref("");
    const user = ref({
        name: "",
        job: "",
    });
    const updatedUser = ref({
        name: "",
        job: "",
    });
    const searchTerm = ref("");
    const show = ref(false);
    const updateId = ref("");
    const showCreateUser = ref(false);

    const getUsers = async () => {
        try {
            const response = await axios.get("/");
            allUsers.value = response.data;
            console.log(response.data); // Manejar la respuesta del servidor según sea necesario
        } catch (error) {
            console.error("Error al recibir los datos:", error);
        }
    };

    const createUser = async () => {
        try {
            const response = await axios.post("/", user.value);

            console.log(response); // Manejar la respuesta del servidor según sea necesario
            // Aquí podrías realizar alguna acción adicional después de enviar los datos correctamente
            user.value = "";
            getUsers();
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            // Manejar el error en caso de que ocurra
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`/delete/${id}`);
            console.log(response); // Manejar la respuesta del servidor según sea necesario
            searchUser();
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    const searchUser = async () => {
        try {
            const response = await axios.get(`/${searchTerm.value}`);
            allUsers.value = response.data;
            getusers();
        } catch (error) {
            console.error("Error al buscar usuarios:", error);
        }
    };

    const openForm = (id) => {
        show.value = true;
        updateId.value = id;
        console.log(updateId.value);
    };

    const updateUser = async () => {
        try {
            const response = await axios.put(`/update/${updateId.value}`, updatedUser.value);
            console.log(response);
            getUsers();
            show.value = false;
            updatedUser.value = "";
        } catch (error) { }
    };

    const toggleForm = () => {
        showCreateUser.value = !showCreateUser.value;
    };

    onMounted(getUsers);
</script>

<template>
    <button @click="toggleForm">Agregar nuevo usuario</button>
    <form @submit.prevent="createUser" v-if="showCreateUser">
        <label for="name">name</label>
        <input type="text" id="name" v-model="user.name" />
        <label for="job">job</label>
        <input type="text" id="job" v-model="user.job" />
        <button type="submit">Submit</button>
    </form>
    <div>
        <label for="name">Buscar por nombre</label>
        <input @input="searchUser" type="text" placeholder="Nombre" v-model="searchTerm" />
    </div>
    <div v-for="user in allUsers">
        {{ user.USER_NAME }}
        <button @click="deleteUser(user.USER_ID)">eliminar</button>
        <button @click="openForm(user.USER_ID)">actualizar</button>
    </div>
    <form @submit.prevent="updateUser" v-if="show">
        <label for="name">name</label>
        <input type="text" id="name" v-model="updatedUser.name" />
        <label for="job">job</label>
        <input type="text" id="job" v-model="updatedUser.job" />
        <button type="submit">Submit</button>
    </form>
    <img src="../assets/vue.svg" alt="" draggable="true" />
</template>

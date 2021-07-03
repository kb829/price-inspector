<template>
    <h1>
          Profile
    </h1>    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SteamAPIService from '../services/steam/SteamAPIService';

export default defineComponent({
    data() {
        return {
            userID: "",
        }
    },
    methods: {
        getUserProfile() {
            SteamAPIService.getProfile(this.userID)
            .then((res: any) => {
                console.log(res.data);
            })
            .catch((e: Error) => {
                console.log(e);
            })
        }
    },
    beforeMount() {
        this.getUserProfile();
    },
})
</script>
<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card patientId='patientId'>

        </user-card>
        <members-card>

        </members-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <edit-profile-form>

        </edit-profile-form>
      </div>
    </div>
</template>

<script>
  import EditProfileForm from '../../UIComponents/PatientProfile/EditProfileForm.vue'
  import UserCard from '../../UIComponents/PatientProfile/UserCard.vue'
  import MembersCard from '../../UIComponents/PatientProfile/MembersCard.vue'
  export default {
    props: {
      patientId: {
        type: String,
        default: ''
      }
    },
    components: {
      EditProfileForm,
      UserCard,
      MembersCard
    },
    created () {
      console.log(this.patientId)
    }
  }

</script>
<style>

</style>

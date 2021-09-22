<template>
  <q-page padding>

 <h4 class="col-12 col-sm-6 text-center "> Registrar Nuevo Contacto</h4>


    <h5 class="text-left">Formulario</h5>

<div class=q-gutter-md >
    <q-form 
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      label= "Formulario"> 

 <div class="row q-col-gutter-md">
      <q-input class= "col-12 col-sm-6"
        filled
        v-model="name"
        label="Escriba el Nombre*"
        hint="Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No Puede estar Vacio']"/>
        

        <q-input class= "col-12 col-sm-6"
        filled
        v-model="apellido"
        label="Escriba su Apellido*"
        hint="Surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No Puede estar Vacio']"/>
        
     
        <q-input class= "col-12 col-sm-6"
        filled
        v-model="correo"
        label="Escriba su Correo Electronico*"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No Puede estar Vacio']"/>
        

        <q-input class= "col-12 col-sm-6"
        filled
        v-model="direccion"
        label="Escriba su Direccion*"
        hint="Address"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'No Puede estar Vacio']"/>
       

        <q-select class= "col-12 col-sm-6"
        filled
        v-model="seleccion"
        label="Seleccione una Cuidad*"
        hint="City"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo Vacio']"
         standout
         :options="opciones"/>


       

         
      <q-input class= "col-12 col-sm-6"
        filled
        type="number"
        v-model="numbe"
        label="Telefono Movil *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'No puede estar vacio',
          val => val > 0 && val < 100 || 'Please type a real age']" />


        <q-input class= "col-12 col-sm-6"
        filled
        type="number"
        v-model="numbe2"
        label="Telefono Residencial *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'No puede estar vacio',
          val => val > 0 && val < 100 || 'Please type a real age']" />
           </div>

       
      <q-toggle v-model="accept" label="Desea aceptar los términos" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" outline  type="reset" color="primary" flat class="q-ml-sm" :ripple="false" />
      </div>
    </q-form>

  </div> 
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const seleccion = ref (null)

        const opciones = ["Santiago,", "Santo Domingo", "La Vega", "San Francisco de Mácoris"];
        
        return {
            seleccion,
            opciones
        }
    },
}
</script>
<template>
  <div>
    <div>
      <h1>预约取件</h1>
    </div>
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'id',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="201907240001"
          />
        </a-form-item>

        <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'name',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="juslly"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" @click="order()">预约</a-button>
          <span>   <a-button type="primary" html-type="submit" @click="reset()">取消</a-button> </span> 
        </a-form-item>

      </a-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    },
    sendMessage: function() {
      let data = {};
      let idPac = document.getElementById("id").value;
      let nameUser = document.getElementById("name").value;
      let phoneUser = document.getElementById("phone").value;
      let weightPac = document.getElementById("weight").value;
      data.id = idPac;
      data.name = nameUser;
      data.phone = phoneUser;
      data.weight = weightPac;
      // data.push(idPac);
      // data.push(nameUser);
      // data.push(phoneUser);
      // data.push(weightPac)

      var self = this;
      self.$store.dispatch("sendMes",data);
    }
  }
};
</script>

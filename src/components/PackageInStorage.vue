<template>
  <div>
    <div>
      <h1>包裹入库</h1>
    </div>
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'id',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="201907240001"
          />
        </a-form-item>

        <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'name',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="juslly"
          />
        </a-form-item>

        <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'phone',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="1527382901"
          />
        </a-form-item>

        <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 10 }">
          <a-input
            v-decorator="[
          'weight',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="3KG"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" @click="sendMessage()">Submit</a-button>
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

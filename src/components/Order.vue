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
          'date',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
            placeholder="20190807"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" @click="order()">预约</a-button>
           <a-button type="primary" html-type="submit" @click="reset()">取消</a-button>
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
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    },
    order: function() {
      let data = {};
      let idPac = document.getElementById("id").value;
      let orderDate = document.getElementById("date").value;
      data.id = idPac;
      data.date = orderDate;
      
      var self = this;
      self.$store.dispatch("sendOrder",data);
    },

    reset:function(){

    }
  }
};
</script>

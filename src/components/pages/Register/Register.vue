<template>
  <div>
    <a-layout>
      <a-layout-header class="nav">
        <a-space class="left-content-space">
          <a-avatar
              class="logo"
              :size="64"
              shape="square"
          >Logo</a-avatar>
        </a-space>
      </a-layout-header>
      <a-layout-content>
        <div class="form-box">
          <a-form
              class="form"
              :model="registerForm"
              layout="vertical"
          >
            <a-form-item
                label="用户名"
                :rules="[
                    {required:true,message:'用户名不得为空'},
                    {minLength:8,message:'用户名长度不得小于8位'},
                    {maxLength:16,message: '用户名长度不得大于16位'},
                    {validator: (value, cb)=>{
                    if(value[0] < 'A' || value[0] > 'z')
                      cb('用户名只能以字母开头')

                    }}
                    ]"
                :validate-trigger="['change','input']"
                required
                field="username"
                feedback
            >
              <a-input
                  v-model="registerForm.username"
              />
            </a-form-item>
            <a-form-item
              label="密码"
              field="password"
              required
              :rules="[
                  {required:true,message:'密码不得为空'},
                  {minLength:8,message: '密码长度不得小于8位'},
                  {maxLength:16,message: '密码长度不得大于16位'},
                  {validator: (value, cb)=>{
                    if(value[0] < 'A' || value[0] > 'Z')
                      cb('密码应为大写字母开头')

                    }}]"
            >
              <a-input-password
                  @clear="registerForm.certificatePassword=''"
                  allow-clear
                  v-model="registerForm.password"
              />
            </a-form-item>
            <a-form-item
              label="确认密码"
              field="certificatePassword"
              required
              :rules="[
                  {validator: (value, cb) => {
                    if(value !== registerForm.password)
                      cb('两次输入密码不一致')
                  }}
              ]"
            >
              <a-input-password
                  allow-clear
                  v-model="registerForm.certificatePassword"
              />
            </a-form-item>
            <a-form-item
              label="手机号码"
              field="telephoneNumber"
              required
              :rules="[
                  {required: true,message:'手机号不得为空'},
                  {length: 11, message: '手机号格式错误'}]"
              feedback
            >
              <a-input
                  v-model="registerForm.telephoneNumber"
                  :max-length='11'
                  :precision="0"
                  @input="onlySaveNumberOfTelephone"
              >
                <template #prepend>
                  +86
                </template>
              </a-input>
              <a-button
                  type="primary"
                  class="send-ccode-button"
                  :disabled="setIdentifyingCodeButtonDisability"
              >发送验证码</a-button>
            </a-form-item>
            <a-form-item
              label="验证码"
              field="identifyingCode"
              feedback
              :rules="[
                  {required: true, message: '验证码不得为空'},
                  {length: 6,message: '验证码格式错误'}]"
            >
              <a-input
                  v-model="registerForm.identifyingCode"
                  :max-length='6'
                  @input="onlySaveNumberOfIdentifyingCode"
              />
            </a-form-item>
            <a-form-item

            >
              <a-checkbox
                :model-value="registerForm.acceptUserProtocol"
              >
                我已阅读并接受</a-checkbox>
              <a-link>用户协议</a-link>
            </a-form-item>
            <a-form-item>
              <a-button
                  long
                  type="primary"
              >确认注册</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-layout-content>
      <a-layout-footer>

      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data(){
    return{
      registerForm:{
        username:'',
        email:'',
        telephoneNumber:'',
        identifyingCode:'',
        password:'',
        certificatePassword:'',
        acceptUserProtocol: false
      }
    }
  },
  methods:{
    onlySaveNumberOfTelephone(value){
      console.log("before clean:" + value)
      for(let i in value)
        if (value[i] > '9' || value < '0')
          value = value.substring(0, parseInt(i) - 1) + value.substring(parseInt(i) - 1, value.length - 1)

      this.registerForm.telephoneNumber = value
    },

    onlySaveNumberOfIdentifyingCode(value){
      console.log("before clean:" + value)
      for(let i in value)
        if (value[i] > '9' || value < '0')
          value = value.substring(0, parseInt(i) - 1) + value.substring(parseInt(i) - 1, value.length - 1)

      this.registerForm.identifyingCode = value
    }

  },

  computed:{
    setIdentifyingCodeButtonDisability(){
      if(this.registerForm.telephoneNumber.length !== 11)
        return true;
      for(let i in this.registerForm.telephoneNumber)
        if (this.registerForm.telephoneNumber[i] > '9' || this.registerForm.telephoneNumber[i] < '0')
          return true;

      return false
    }
  }
}
</script>

<style scoped>
.nav{
  width: 100%;
  height: 96px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.left-content-space{
  align-self: center;
  height: 96px;
  padding: 0 0 0 16px;
}

.logo {
  margin: 0 8px 0 0;
}

.form-box{
  width: 100%;
  margin: 48px 0;
}

.form{
  width: 400px;
  margin: 0 auto;
}

.send-ccode-button{
  margin: 0 0 0 8px;
}
</style>
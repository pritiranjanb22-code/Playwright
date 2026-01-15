exports.loginpage = class loginpage{

    constructor(page){
        this.page = page
        this.login_Url = page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        this.username_Textbox = page.locator('div.orangehrm-login-error p:first-child')
        this.passWord_Textbox = page.locator("div[class='orangehrm-login-error'] p:nth-child(2)")
        this.lgin_button = page.getByRole('button', {type :'submit'})
}
async login(url,usename,password){
    await this.login_Url(url)
    await this.username_Textbox(usename).textContent()
    await this.passWord_Textbox(password).textContent()
    await this.lgin_button().click()
}}
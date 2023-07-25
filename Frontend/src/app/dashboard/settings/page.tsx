import Card from "../../components/card"
import Button from "../../components/button"
import InputField from "../../components/inputField"

export default function Settings() {
    return (
        <main>
            <form>
                <InputField labelName="Password:" inputName="password" />
                <InputField labelName="Confirm New Password:" inputName="confirm_new_password" />
                <Button text="SAVE" inputType="submit" />
            </form>
        </main>
    )
}
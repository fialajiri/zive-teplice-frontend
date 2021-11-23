import { useRouter } from "next/router";
import ResetPasswordStepTwo from "../../../../components/pages/admin/password/reset/reset-step-two";

const ConfirmResetPasswordPage = () => {
    const router = useRouter();
    const token = router.query.token;
    console.log(token);

    return <ResetPasswordStepTwo token={token} />
}

export default ConfirmResetPasswordPage;
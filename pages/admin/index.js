import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

const AdminPage = () => {

    const role = 'admin';

    if (role==='admin'){
        return <GeneralAdmin />
    }

    return <PerformerAdmin />

}

export default AdminPage;
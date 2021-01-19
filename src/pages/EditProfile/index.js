import EditProfile from "../../components/EditProfile";
import { GridEdit } from "../../components/EditProfile/style";
import PopUpDiv from "../AnimalForm/popup";
import { useState } from "react";
const EditProfilePage = () => {
  const [ReqError, SetReqError] = useState(false);

  const handleCloseInfo = () => {
    SetReqError(false);
  };
  return (
    <GridEdit>
      <PopUpDiv isVisible={ReqError} closeInfo={handleCloseInfo} />
      <EditProfile />
    </GridEdit>
  );
};

export default EditProfilePage;

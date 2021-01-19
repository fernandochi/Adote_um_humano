import { Img, InputImg, Label } from "../../pages/Register/style";

const ImgPreview = ({ register, edit = false, object }) => {
  const previewImagem = (ev) => {
    const $ = document.querySelector.bind(document);
    const img_src = $(".preview-img");
    let fileToUpload = ev.target.files[0];

    if (edit === true && fileToUpload === undefined) {
      return (img_src.src = object.avatar);
    }

    if (fileToUpload === undefined) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (ev) => (img_src.src = ev.target.result);
    reader.readAsDataURL(fileToUpload);
  };
  return (
    <>
      {edit ? (
        <Img className="preview-img" src={object.avatar} />
      ) : (
        <Img className="preview-img" />
      )}

      <Label htmlFor="avatar">Foto</Label>
      <InputImg
        id="avatar"
        name="avatar"
        type="file"
        ref={register}
        onChange={previewImagem}
        accept="image/*"
      />
    </>
  );
};

export default ImgPreview;

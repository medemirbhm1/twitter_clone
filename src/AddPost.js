import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, Field } from "formik";
import { MyTextArea } from "./MyTextarea";
import { db, storage } from "./backend/firebase";
import { ref, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LoadingContext from "./LoadingContext";

const AddPost = ({ user }) => {
  const [imgPath, setImgPath] = useState();
  const [imgObj, setImgObj] = useState();
  const setLoading = useContext(LoadingContext);

  function handleSubmit(values, props) {
    const postListRef = ref(db, "posts");
    const newPostRef = push(postListRef);
    let has = false;
    if (imgObj) {
      const stRef = new storageRef(storage, `/postImgs/${newPostRef.key}`);
      has = true;
      setLoading(true);
      uploadBytes(stRef, imgObj)
        .then(() => {
          setImgObj(null);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
    set(newPostRef, {
      text: values.text,
      topic: values.topic,
      hasImg: has,
      postedBy: user.uid,
      postedAt: new Date().valueOf(),
      likeCount: 0,
    });
    setImgPath("");
    props.resetForm();
  }
  function validateTextArea(value) {
    let err;
    if (!value) {
      err = "Nice try ! Please type something.";
    }
    return err;
  }
  return (
    <div className="addPost">
      <Formik
        initialValues={{
          text: "",
          imgPath: "",
          topic: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <img src={user.imgUrl} referrerPolicy="no-referrer" alt="userImg" />
            <div className="inputs">
              <MyTextArea
                label="First Name"
                name="text"
                validate={validateTextArea}
                placeholder={
                  errors.text
                    ? "Nice try please type in something"
                    : "Whats's happening ?"
                }
              />
              {imgPath ? (
                <div className="image">
                  <button
                    className="remove"
                    onClick={() => {
                      setImgPath("");
                      setImgObj(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <img src={imgPath} alt="" />
                </div>
              ) : null}
              <div className="inprow">
                <label htmlFor="upload-image">
                  <FontAwesomeIcon icon={faImage} />
                </label>
                <Field
                  id="upload-image"
                  name="imgPath"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg "
                  onChange={(e) => {
                    let url = null;
                    let fileObj = e.target.files[0];
                    if (window.createObjcectURL != undefined) {
                      url = window.createOjcectURL(fileObj);
                    } else if (window.URL != undefined) {
                      url = window.URL.createObjectURL(fileObj);
                    } else if (window.webkitURL != undefined) {
                      url = window.webkitURL.createObjectURL(fileObj);
                    }
                    setImgPath(url);
                    setImgObj(fileObj);
                  }}
                />
                <div role="group" className="radioCont">
                  <label htmlFor="coding">
                    <Field
                      id="coding"
                      type="radio"
                      name="topic"
                      value="coding"
                    />
                    <span>coding</span>
                  </label>
                  <label htmlFor="football">
                    <Field
                      id="football"
                      type="radio"
                      name="topic"
                      value="football"
                    />
                    <span>football</span>
                  </label>
                  <label htmlFor="music">
                    <Field id="music" type="radio" name="topic" value="music" />
                    <span>music</span>
                  </label>
                  <label htmlFor="other">
                    <Field id="other" type="radio" name="topic" value="" />
                    <span>other</span>
                  </label>
                </div>
                <button className="btn" type="submit">
                  Tweet
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPost;

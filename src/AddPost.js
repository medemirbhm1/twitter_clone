import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, Field } from "formik";
import { MyTextArea } from "./MyTextarea";
import { db, storage } from "./backend/firebase";
import { ref, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes } from "firebase/storage";

const AddPost = ({ user }) => {
  function handleSubmit(values, props) {
    const postListRef = ref(db, "posts");
    const newPostRef = push(postListRef);
    let has = false;
    if (values.imgPath) {
      const stRef = new storageRef(storage, `/postImgs/${newPostRef.key}`);
      has = true;
      uploadBytes(stRef, document.getElementById("upload-image").files[0]).then(
        () => {
          // setLoading(false);
          console.log("finished");
        }
      );
    }
    set(newPostRef, {
      text: values.text,
      topic: values.topic,
      hasImg: has,
      postedBy: user.uid,
      postedAt: new Date().valueOf(),
      likeCount: 0,
    });
    props.resetForm();
  }
  return (
    <div className="addPost">
      <h3>Home</h3>
      <Formik
        initialValues={{
          text: "",
          imgPath: "",
          topic: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <img src={user.photoURL} alt="userImg" />
          <div className="inputs">
            <MyTextArea
              label="First Name"
              name="text"
              placeholder="Whats's happening ?"
            />
            <div>
              <label htmlFor="upload-image">
                <FontAwesomeIcon icon={faImage} />
              </label>
              <Field
                id="upload-image"
                name="imgPath"
                type="file"
                accept="image/png, image/jpeg, image/jpg "
              />
              <div role="group" className="radioCont">
                <label htmlFor="coding">
                  <Field id="coding" type="radio" name="topic" value="coding" />
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
      </Formik>
    </div>
  );
};

export default AddPost;

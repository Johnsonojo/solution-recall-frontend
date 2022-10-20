import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "./style.scss";

const MainEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  useEffect(() => {
    const defaultValue = props.value ? props.value : "";
    const blocksFromHtml = htmlToDraft(defaultValue);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorStateFromHtml = EditorState.createWithContent(contentState);
    setEditorState(editorStateFromHtml);
    // eslint-disable-next-line
  }, []);

  const MyEditor = React.forwardRef((props, ref) => {
    return (
      <Editor
        {...props}
        inputRef={ref}
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="editor">
        <MyEditor />
      </div>
    </React.Fragment>
  );
};

export default MainEditor;

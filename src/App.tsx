import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";

interface AppState {
  editorInstance: any | null;
}

class App extends Component {
  state: AppState = {
    editorInstance: null,
  };
  handleEditorReady = (editor: typeof ClassicEditor) => {
    this.setState({ editorInstance: editor });
  };

  handleExportHtml = () => {
    const { editorInstance } = this.state;
    if (editorInstance) {
      const htmlContent = editorInstance.getData();
      console.log(htmlContent); // Or handle the export as needed
    }
  };
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 build in React</h2>
        <CKEditor
          editor={ClassicEditor.Editor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            this.setState({ editorInstance: editor });
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            console.log(event);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <button onClick={this.handleExportHtml}>Export HTML</button>
      </div>
    );
  }
}

export default App;

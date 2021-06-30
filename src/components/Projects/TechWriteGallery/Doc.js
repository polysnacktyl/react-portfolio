import React from "react";
import { Link } from 'react-router-dom';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

class Doc extends React.Component {

  state = { numPages: null, pageNumber: 1, fileURL: this.props.data.state.file }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }))

  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }))


  render(props) {

    const { pageNumber, numPages } = this.state;
    const fileURL = this.props.data.state.file;
    return (
      <div className='content-container'>
        <div className='outer'>
          <div className='PDFwrapper'>
            <div className='PDF'>
              <Document
                file={fileURL}
                onLoadSuccess={this.onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
            </div>


          </div>
          <div className='count'>
            <nav>
              <button
                className='prev'
                disabled={pageNumber <= 1}
                onClick={this.goToPrevPage}>
                <i className="fas fa-angle-double-left"></i>
              </button>
              <button
                className='next'
                disabled={pageNumber >= numPages}
                onClick={this.goToNextPage}>
                <i className="fas fa-angle-double-right"></i>
              </button>

            </nav>

            <p>
              {pageNumber} of {numPages}
            </p>

          </div>
        </div>
        <Link to='/work/docs'><div className='back'>back</div></Link>
      </div >


    );


  }


};

export default Doc;
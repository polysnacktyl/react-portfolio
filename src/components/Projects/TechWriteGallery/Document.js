import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import documentsData from '../../../assets/data/documents.js';
import './style.css';


class Doc extends Component {


  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));

  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));


  render() {

    const { pageNumber, numPages } = this.state;


    return (
      <div className='content-container'>
        <div className='outer'>
          <div className='PDFwrapper'>

            <div className='PDF'>

              <Document
                file={documentsData[2]}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
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
        <Link to='/work'><div className='back'>back</div></Link>
      </div>
    );
  }
};

export default Doc;


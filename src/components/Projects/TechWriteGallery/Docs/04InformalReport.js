import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import documentsData from '../../../../assets/data/documents';
import '../style.css';


class InformalReport extends Component {
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
            <nav>
              <button
                className='prev'
                disabled={pageNumber <= 1}
                onClick={this.goToPrevPage}>
                <i className="fas fa-angle-double-left"></i>
              </button>
            </nav>
            <div className='PDF' style={{ width: 650 }}>
              <Document
                file={documentsData[3]}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} width={650} />
              </Document>
            </div>
            <nav>
              <button
                className='next'
                disabled={pageNumber >= numPages}
                onClick={this.goToNextPage}>
                <i className="fas fa-angle-double-right"></i>
              </button>
            </nav>
            <div className='count'>
              <p>
                {pageNumber} of {numPages}
              </p>
            </div>
          </div>
        </div>
        <Link to='/work/docs'><div className='back'>back</div></Link>
      </div>
    );
  }
};

export default InformalReport;


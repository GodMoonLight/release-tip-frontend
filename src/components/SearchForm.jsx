import React from 'react';
import { Row, Col, Form } from 'antd';
import styles from './index.module.scss';

import { Input } from 'antd';
import PropTypes from "prop-types";

const { Search } = Input;


const SearchInput = (props) => {

  return (
    <div className={styles.searchForm} style={props.style}>
      <Row>
        <Col span={24}>
          <Search allowClear size="large" {...props}/>
        </Col>
      </Row>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
}
export default SearchInput;

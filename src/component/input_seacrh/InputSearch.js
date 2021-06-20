import React from 'react';
import PropTypes from 'prop-types';
//
import './InputSearch.scss';

//
InputSearch.propTypes = {};

//
function InputSearch({ value, handleChange, handleSearch, handleKeydown }) {
    //
    function onKeydown(e) {
        if (handleKeydown) {
            handleKeydown(e);
        } else if (e.keyCode == 13 && value) {
            handleSearch();
        }
    }

    //
    return (
        <div className="InputSearch brs-5px">
            <div className="InputSearch_row display-flex align-items-center">
                <div className="InputSearch_input flex-grow-1">
                    <div className="InputSearch_input-contain">
                        <input
                            className="InputSearch_input-item w-100per input-none"
                            type="text"
                            value={value}
                            onChange={handleChange}
                            onKeyDown={onKeydown}
                        />
                    </div>
                </div>

                <div>
                    <div
                        className="InputSearch_right_contain padding-8px hv-bg-gold cursor-pointer h-100per"
                        onClick={handleSearch}
                    >
                        Search
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputSearch;

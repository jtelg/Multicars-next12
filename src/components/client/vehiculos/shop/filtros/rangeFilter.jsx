import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const MultiRangeSlider = ({
  min,
  max,
  onChange,
  setFormulario,
  formulario,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convertir a porcentaje
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Establecer el ancho del rango para disminuir desde el lado izquierdo
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Establecer el ancho del rango para disminuir desde el lado derecho
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Obtener valores mínimos y máximos cuando cambia su estado
  useEffect(() => {
    setFormulario({ ...formulario, min: minVal, max: maxVal });
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">
            $
            {minVal.toLocaleString("es-ES", {
              useGrouping: true,
              minimumFractionDigits: 0,
            })}
          </div>
          <div className="slider__right-value">
            $
            {maxVal.toLocaleString("es-ES", {
              useGrouping: true,
              minimumFractionDigits: 0,
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider {
          position: relative;
          width: 260px;
        }

        .slider__track,
        .slider__range,
        .slider__left-value,
        .slider__right-value {
          position: absolute;
        }

        .slider__track,
        .slider__range {
          border-radius: 3px;
          height: 5px;
        }

        .slider__track {
          background-color: #c7c7c7;

          width: 100%;
          z-index: 1;
        }

        .slider__range {
          background-color: black;
          z-index: 2;
        }

        .slider__left-value,
        .slider__right-value {
          color: black;
          font-size: 12px;
          font-weight: bold;
          margin-top: 20px;
        }

        .slider__left-value {
          left: 6px;
        }

        .slider__right-value {
          right: -4px;
        }

        /* Removing the default appearance */
        .thumb,
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: #a7916a;
        }

        .thumb {
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 260px;
          outline: none;
        }

        .thumb--left {
          z-index: 3;
        }

        .thumb--right {
          z-index: 4;
        }

        /* For Chrome browsers */
        .thumb::-webkit-slider-thumb {
          background-color: #f1f5f7;
          border: none;
          border-radius: 50%;
          box-shadow: 0 0 1px 1px #ced4da;
          cursor: pointer;
          height: 18px;
          width: 18px;
          margin-top: 4px;
          pointer-events: all;
          position: relative;
        }

        /* For Firefox browsers */
        .thumb::-moz-range-thumb {
          background-color: #f1f5f7;
          border: none;
          border-radius: 50%;
          box-shadow: 0 0 1px 1px #ced4da;
          cursor: pointer;
          height: 18px;
          width: 18px;
          margin-top: 4px;
          pointer-events: all;
          position: relative;
        }
        @media (max-width: 768px) {
          .slider {
            width: 90%;
          }
          .thumb {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;

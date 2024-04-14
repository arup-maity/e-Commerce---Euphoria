"use client";
import React, { useEffect, useRef, useState } from "react";
import "./multirangeslider.css";

type MultiRangeSliderProps = {
  id?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  minValue?: number | string;
  maxValue?: number | string;
  className?: string;
  disabled?: boolean;
  minCaption?: string;
  maxCaption?: string;
  onInput?: (e: ChangeResult) => void;
  onChange?: (e: ChangeResult) => void;
  thumbStyle?: string[];
  thumbLeftStyle?: string[];
  tooltip?: boolean;
};
export type ChangeResult = {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
};
let _triggerTimeout: number | null = null;

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = props => {
  let refBar = useRef<HTMLDivElement>(null);
  let min = +(props.min || 0);
  let max = +(props.max || 100);
  let step = Math.abs(+(props.step || 5));
  let fixed = 0;
  let disabled = !!props.disabled;
  let stepValue = props.canMinMaxValueSame ? 0 : step;

  let stepCount = Math.floor((+max - +min) / +step);

  if (step.toString().includes(".")) {
    fixed = 2;
  }
  //  get the minimum value
  let _minValue = props.minValue;
  if (_minValue === null || _minValue === undefined) {
    _minValue = 25;
  }
  _minValue = +_minValue;
  // get the maximum value
  let _maxValue = props.maxValue;
  if (_maxValue === null || _maxValue === undefined) {
    _maxValue = 75;
  }
  _maxValue = +_maxValue;

  if (_minValue < min) {
    _minValue = min;
  }
  if (_minValue > max) {
    _minValue = max;
  }
  if (_maxValue < _minValue) {
    _maxValue = +_minValue + +step;
  }
  if (_maxValue > max) {
    _maxValue = max;
  }
  if (_maxValue < min) {
    _maxValue = min;
  }

  // state
  const [minValue, set_minValue] = useState(+_minValue);
  const [maxValue, set_maxValue] = useState(+_maxValue);
  const [barMin, set_barMin] = useState((minValue - min) / (max - min) * 100);
  const [barMax, set_barMax] = useState((max - maxValue) / (max - min) * 100);
  const [minCaption, setMinCaption] = useState<string>("");
  const [maxCaption, setMaxCaption] = useState<string>("");
  const [isChange, setIsChange] = useState(true);

  //   new
  const stepOnly = true;

  const onBarLeftClick = (e: React.MouseEvent) => {
    if (disabled) return;
    let _minValue = minValue - step;
    if (_minValue < min) {
      _minValue = min;
    }
    set_minValue(_minValue);
  };
  const onLeftThumbMousedown: React.MouseEventHandler = (
    e: React.MouseEvent
  ) => {
    if (disabled) return;
    let startX = e.clientX;
    let thumb = e.target as HTMLDivElement;
    let bar = thumb.parentNode as HTMLDivElement;
    let barBox = bar.getBoundingClientRect();
    let barValue = minValue;
    setIsChange(false);
    let onLeftThumbMousemove: { (e: MouseEvent): void } = (e: MouseEvent) => {
      let clientX = e.clientX;
      let dx = clientX - startX;
      let per = dx / barBox.width;
      let val = barValue + (max - min) * per;
      val = Math.round(val / step) * step;
      val = parseFloat(val.toFixed(fixed));
      if (val < min) {
        val = min;
      } else if (val > maxValue - stepValue) {
        val = maxValue - stepValue;
      }
      set_minValue(val);
    };
    let onLeftThumbMouseup: { (e: MouseEvent): void } = (e: MouseEvent) => {
      setIsChange(true);
      document.removeEventListener("mousemove", onLeftThumbMousemove);
      document.removeEventListener("mouseup", onLeftThumbMouseup);
    };
    document.addEventListener("mousemove", onLeftThumbMousemove);
    document.addEventListener("mouseup", onLeftThumbMouseup);
  };
  const onLeftThumbTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;
    let startX = e.touches[0].clientX;
    let thumb = e.target as HTMLDivElement;
    let bar = thumb.parentNode as HTMLDivElement;
    let barBox = bar.getBoundingClientRect();
    let barValue = minValue;
    setIsChange(false);
    let onLeftThumbToucheMove: { (e: TouchEvent): void } = (e: TouchEvent) => {
      let clientX = e.touches[0].clientX;
      let dx = clientX - startX;
      let per = dx / barBox.width;
      let val = barValue + (max - min) * per;
      val = Math.round(val / step) * step;
      val = parseFloat(val.toFixed(fixed));
      if (val < min) {
        val = min;
      } else if (val > maxValue - stepValue) {
        val = maxValue - stepValue;
      }
      set_minValue(val);
    };
    let onLeftThumbTouchEnd: { (e: TouchEvent): void } = (e: TouchEvent) => {
      setIsChange(true);
      document.removeEventListener("touchmove", onLeftThumbToucheMove);
      document.removeEventListener("touchend", onLeftThumbTouchEnd);
    };

    document.addEventListener("touchmove", onLeftThumbToucheMove);
    document.addEventListener("touchend", onLeftThumbTouchEnd);
  };
  const onInnerBarLeftClick = (e: React.MouseEvent) => {
    if (disabled) return;
    let _minValue = minValue + step;
    if (_minValue > maxValue - stepValue) {
      _minValue = maxValue - stepValue;
    }
    set_minValue(_minValue);
  };
  const onInnerBarRightClick = (e: React.MouseEvent) => {
    if (disabled) return;
    let _maxValue = maxValue - step;
    if (_maxValue < minValue + stepValue) {
      _maxValue = minValue + stepValue;
    }
    set_maxValue(_maxValue);
  };

  const onRightThumbMousedown: React.MouseEventHandler = (
    e: React.MouseEvent
  ) => {
    if (disabled) return;
    let startX = e.clientX;
    let thumb = e.target as HTMLDivElement;
    let bar = thumb.parentNode as HTMLDivElement;
    let barBox = bar.getBoundingClientRect();
    let barValue = maxValue;
    setIsChange(false);
    let onRightThumbMousemove: { (e: MouseEvent): void } = (e: MouseEvent) => {
      let clientX = e.clientX;
      let dx = clientX - startX;
      let per = dx / barBox.width;
      let val = barValue + (max - min) * per;
      val = Math.round(val / step) * step;
      val = parseFloat(val.toFixed(fixed));
      if (val < minValue + stepValue) {
        val = minValue + stepValue;
      } else if (val > max) {
        val = max;
      }
      set_maxValue(val);
    };
    let onRightThumbMouseup: { (e: MouseEvent): void } = (e: MouseEvent) => {
      setIsChange(true);
      document.removeEventListener("mousemove", onRightThumbMousemove);
      document.removeEventListener("mouseup", onRightThumbMouseup);
    };
    document.addEventListener("mousemove", onRightThumbMousemove);
    document.addEventListener("mouseup", onRightThumbMouseup);
  };
  const onRightThumbTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;
    let startX = e.touches[0].clientX;
    let thumb = e.target as HTMLDivElement;
    let bar = thumb.parentNode as HTMLDivElement;
    let barBox = bar.getBoundingClientRect();
    let barValue = maxValue;
    setIsChange(false);
    let onRightThumbTouchMove: { (e: TouchEvent): void } = (e: TouchEvent) => {
      let clientX = e.touches[0].clientX;
      let dx = clientX - startX;
      let per = dx / barBox.width;
      let val = barValue + (max - min) * per;
      val = Math.round(val / step) * step;
      val = parseFloat(val.toFixed(fixed));
      if (val < minValue + stepValue) {
        val = minValue + stepValue;
      } else if (val > max) {
        val = max;
      }
      set_maxValue(val);
    };
    let onRightThumbTouchEnd: { (e: TouchEvent): void } = (e: TouchEvent) => {
      setIsChange(true);
      document.removeEventListener("touchmove", onRightThumbTouchMove);
      document.removeEventListener("touchend", onRightThumbTouchEnd);
    };
    document.addEventListener("touchmove", onRightThumbTouchMove);
    document.addEventListener("touchend", onRightThumbTouchEnd);
  };
  const onBarRightClick = (e: React.MouseEvent) => {
    if (disabled) return;
    let _maxValue = maxValue + step;
    if (_maxValue > max) {
      _maxValue = max;
    }
    set_maxValue(_maxValue);
  };

  useEffect(
    () => {
      if (refBar && refBar.current) {
        let bar = refBar.current as HTMLDivElement;
        let p_bar = bar.parentNode as HTMLDivElement;
        p_bar.addEventListener("wheel", e => {
          if (!e.shiftKey && !e.ctrlKey) {
            return;
          }
          e.preventDefault();
        });
      }
    },
    [refBar]
  );

  useEffect(
    () => {
      if (maxValue < minValue) {
        throw new Error("maxValue is less than minValue");
      }
      const triggerChange = () => {
        let result: ChangeResult = { min, max, minValue, maxValue };
        isChange && props.onChange && props.onChange(result);
        props.onInput && props.onInput(result);
      };
      setMinCaption(props.minCaption || minValue.toFixed(fixed));
      setMaxCaption(props.maxCaption || maxValue.toFixed(fixed));
      let _barMin = (minValue - min) / (max - min) * 100;
      set_barMin(_barMin);
      let _barMax = (max - maxValue) / (max - min) * 100;
      set_barMax(_barMax);
      _triggerTimeout && window.clearTimeout(_triggerTimeout);
      _triggerTimeout = window.setTimeout(triggerChange, 20);
    },
    [minValue, maxValue, min, max, fixed, props, isChange]
  );

  useEffect(
    () => {
      let _minValue = props.minValue;
      if (_minValue === null || _minValue === undefined) {
        _minValue = 25;
      }
      _minValue = +_minValue;
      if (_minValue < min) {
        _minValue = min;
      }
      if (_minValue > max) {
        _minValue = max;
      }
      setIsChange(false);
      set_minValue(+_minValue);
    },
    [props.minValue, min, max]
  );
  useEffect(
    () => {
      let _maxValue = props.maxValue;
      if (_maxValue === null || _maxValue === undefined) {
        _maxValue = 75;
      }
      _maxValue = +_maxValue;

      if (_maxValue > max) {
        _maxValue = max;
      }
      if (_maxValue < min) {
        _maxValue = min;
      }
      setIsChange(false);
      set_maxValue(+_maxValue);
    },
    [props.maxValue, min, max, step]
  );

  return (
    <div
      id={props.id}
      className={`range-slider ${props.className
        ? props.className
        : ""} ${disabled ? "disabled" : ""}`}
      style={props.style}
    >
      <div className="bar-container" ref={refBar}>
        {/* left bar */}
        <div
          className="bar bar-left"
          style={{ width: barMin + "%", ...props.barStyle }}
          onClick={onBarLeftClick}
        />
        {/* left thumb */}
        <div
          className="thumb thumb-left"
          style={{ ...props.thumbStyle, ...props.thumbLeftStyle }}
          onMouseDown={onLeftThumbMousedown}
          onTouchStart={onLeftThumbTouchStart}
        >
          <div
            className="caption"
            style={{ display: props.tooltip ? "" : "none" }}
          >
            <span className="min-caption">
              {minCaption}
            </span>
          </div>
        </div>
        {/* inner bar */}
        <div
          className="bar bar-inner"
          style={{
            ...props.barStyle,
            backgroundColor: props.color || "#40679E"
          }}
        >
          <div style={{ width: "50%" }} onClick={onInnerBarLeftClick} />
          <div style={{ width: "50%" }} onClick={onInnerBarRightClick} />
        </div>
        {/* right thumb */}
        <div
          className="thumb thumb-right"
          style={{ ...props.thumbStyle, ...props.thumbRightStyle }}
          onMouseDown={onRightThumbMousedown}
          onTouchStart={onRightThumbTouchStart}
        >
          <div
            className="caption"
            style={{ display: props.tooltip ? "" : "none" }}
          >
            <span className="max-caption">
              {maxCaption}
            </span>
          </div>
        </div>
        {/* right bar */}
        <div
          className="bar bar-right"
          style={{ width: barMax + "%", ...props.barStyle }}
          onClick={onBarRightClick}
        />
      </div>
    </div>
  );
};

export default MultiRangeSlider;

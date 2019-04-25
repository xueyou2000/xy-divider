import React from "react";
import classNames from "classnames";
import { DividerProps } from "./interface";

export function Divider(props: DividerProps) {
    const { prefixCls = "xy-divider", className, style, children, dashed, type = "horizontal", orientation = "center" } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-type-${type}`]: Boolean(type),
        [`${prefixCls}-orientation-${orientation}`]: Boolean(orientation),
        [`${prefixCls}-dashed`]: dashed,
        [`${prefixCls}-with-text`]: Boolean(children)
    });

    return (
        <div className={classString} style={style}>
            {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
        </div>
    );
}

export default React.memo(Divider);

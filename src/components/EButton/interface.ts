import React from "react";
export interface IButtonProps {
  /**
   * 自定义class类名
   *
   */

  className?: string;
  /**
   * 按钮样式
   */
  style?: React.CSSProperties;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

export interface IEButtonProps extends IButtonProps {
  /**
   * 按钮文本
   * @default '按钮'
   * */

  label?: string;
  /**
   * 点击事件
   * @default () => {}
   * */
  onClick?: () => void;
  /**
   * 按钮大小
   * @default 'medium'
   * */

  size?: "small" | "medium" | "large";
  /**
   * 按钮是否禁用
   * */

  disabled?: boolean;
}

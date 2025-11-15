import React, { ReactNode } from 'react';
import { Icon, CheckCircle, XCircle, AlertCircle, Info } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { cn } from '../../utils/classnames';
import styles from './Alert.module.scss';

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
  className?: string;
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export const Alert: React.FC<AlertProps> = ({ variant = 'info', children, className }) => {
  return (
    <div className={cn(styles.alert, styles[`alert--${variant}`], className)}>
      <Icon icon={iconMap[variant]} color={variant === 'info' ? 'info' : variant} size="md" />
      <Text variant="body-sm">{children}</Text>
    </div>
  );
};

Alert.displayName = 'Alert';

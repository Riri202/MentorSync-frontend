import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Alert, CircularProgress } from '@mui/material';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function DialogModal({
  title,
  subTitle,
  btnText,
  btnVariant,
  submitAction,
  reload,
  btnIcon,
  btnStyle = 'w-[30%]',
  dialogStyle = '',
  btnCustomColor = 'primary',
  children,
  fullWidth = false,
  maxWidth = false,
  hasDialogActionButtons = true,
}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitErrorText, setSubmitErrorText] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitErrorText('');
  };

  const submit = async () => {
    setLoading(true);
    const response = await submitAction();
    if (response?.error) {
      setSubmitErrorText(response?.error);
    } else {
      reload();
    }
    setLoading(false);
  };

  return (
    <div className={`w-full ${dialogStyle}`}>
      <Button
        variant={btnVariant}
        className={btnStyle}
        onClick={handleClickOpen}
        color={btnCustomColor}
      >
        {btnIcon && <span className="mr-2">{btnIcon}</span>}
        {btnText}
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
        <DialogContent dividers>
          <p className="font-generalSansRegular p-3 max-h-24 md:max-h-fit overflow-y-scroll">
            {subTitle}
          </p>
          {children && children}
          {submitErrorText && <Alert severity="error">{submitErrorText}</Alert>}
        </DialogContent>
        {hasDialogActionButtons && (
        <DialogActions sx={{ display: 'flex', width: '100%', padding: 2 }}>
          <Button sx={{ width: '50%', padding: '10px' }} disabled={loading} onClick={submit} variant="contained" disableElevation>
            {loading && (
            <CircularProgress size={12} style={{ marginRight: 10 }} />
            )}
            Yes
          </Button>
          <Button sx={{ width: '50%', padding: '10px' }} disabled={loading} onClick={handleClose} variant="outlined">
            No
          </Button>
        </DialogActions>
        )}

      </Dialog>
    </div>
  );
}

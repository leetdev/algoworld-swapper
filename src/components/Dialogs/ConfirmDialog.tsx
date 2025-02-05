/**
 * AlgoWorld Swapper
 * Copyright (C) 2022 AlgoWorld
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  Typography,
} from '@mui/material';
import {
  CONFIRM_DIALOG_ID,
  DIALOG_CANCEL_BTN_ID,
  DIALOG_SELECT_BTN_ID,
} from './constants';

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
  transactionsFee?: number | string;
};

const ConfirmDialog = ({
  title,
  children,
  open,
  setOpen,
  onConfirm,
  transactionsFee,
}: Props) => {
  return (
    <Dialog
      id={CONFIRM_DIALOG_ID}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>
        {children}

        {transactionsFee && (
          <>
            <Divider sx={{ pt: 1 }}></Divider>
            <Typography sx={{ pt: 1, fontWeight: `bold` }}>
              Transaction fees: ~{transactionsFee} Algo
            </Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          id={DIALOG_CANCEL_BTN_ID}
          onClick={() => setOpen(false)}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          id={DIALOG_SELECT_BTN_ID}
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

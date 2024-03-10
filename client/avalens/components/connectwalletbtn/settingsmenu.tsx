import { Button } from '../button';
{/* import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { toast } from '@/ui/hooks/use-toast';
import { truncateAddress } from '@/utils/truncate-address';
import { ExitIcon } from '@radix-ui/react-icons';
import { Circle, Settings } from 'lucide-react'; */}
import { useAccount, useDisconnect } from 'wagmi';

export const SettingsMenu = () => {
  const { address, isConnected } = useAccount();
  if (!address || !isConnected) {
    throw new Error('Not connected.');
  }
  const { disconnectAsync } = useDisconnect();
  const handleDisconnectButtonClick = async () => {
    await disconnectAsync();

    toast({
      title: 'Disconnected Successfully',
    });
  };

  return (
    <p>Yo</p>
  );
};
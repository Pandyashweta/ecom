import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { Check, LogOut, Camera, MapPin, X, Heart, Bell, Settings, Package } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from '@/contexts/CartContext';
import { ProductCard } from '@/components/ProductCard';
import { Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, verifyEmail, verifyPhone, updateProfile } = useAuth();
  const { wishlist } = useCart();
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [verifyType, setVerifyType] = useState<'email' | 'phone' | null>(null);
  const [address, setAddress] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) {
      navigate('/account');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user?.address) {
      setAddress(user.address);
    }
  }, [user]);

  const handleVerifyClick = (type: 'email' | 'phone') => {
    setVerifyType(type);
    setIsOtpOpen(true);
    setOtpValue('');
    toast.info(`Mock OTP sent to your ${type}: 1234`);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue === '1234') {
      if (verifyType === 'email') verifyEmail();
      if (verifyType === 'phone') verifyPhone();
      setIsOtpOpen(false);
      setOtpValue('');
    } else {
      toast.error('Invalid OTP. Try 1234');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddressSave = () => {
    updateProfile({ address });
  };

  const mockOrders = [
    {
      id: 'ORD-8821',
      date: 'Oct 24, 2025',
      status: 'Delivered',
      total: '₹4,200',
      shippingAddress: user?.address || '123 Fashion Ave, New York, NY 10001',
      paymentMethod: 'Credit Card ending in 4242',
      items: [
        { name: 'Zari-panelled Fusion Dress', price: '₹4,200', quantity: 1, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&q=80' }
      ]
    },
    {
      id: 'ORD-8822',
      date: 'Oct 10, 2025',
      status: 'Processing',
      total: '₹1,850',
      shippingAddress: user?.address || '123 Fashion Ave, New York, NY 10001',
      paymentMethod: 'UPI',
      items: [
        { name: 'Handcrafted Silver Jhumka', price: '₹1,850', quantity: 1, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80' }
      ]
    }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-4 md:px-8 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display text-espresso">My Dashboard</h1>
          <Button variant="outline" onClick={() => { logout(); navigate('/'); }}>
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Button>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6 p-6 border rounded-lg bg-card">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-muted border-2 border-border flex items-center justify-center">
                      {user.profileImage ? (
                        <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl font-display text-muted-foreground">{user.name.charAt(0)}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-0 right-0 p-2 bg-espresso text-white rounded-full hover:bg-espresso/90 transition-colors shadow-sm"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-lg">{user.name}</p>
                    <p className="text-sm text-muted-foreground">Member Since {new Date(user.joinedDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Full Name</label>
                    <Input value={user.name} disabled className="mt-1 bg-muted/50" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Address
                    </label>
                    <div className="flex gap-2 mt-1">
                      <Input 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Enter your delivery address"
                      />
                      <Button onClick={handleAddressSave} variant="outline">Save</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Status */}
              <div className="space-y-6 p-6 border rounded-lg bg-card">
                <h2 className="text-xl font-semibold">Verification Status</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    {user.isEmailVerified ? (
                      <span className="flex items-center text-green-600 text-sm font-medium">
                        <Check className="w-4 h-4 mr-1" /> Verified
                      </span>
                    ) : (
                      <Button size="sm" variant="secondary" onClick={() => handleVerifyClick('email')}>
                        Verify Now
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <p className="text-sm text-muted-foreground">{user.phone || 'Not added'}</p>
                    </div>
                    {user.isPhoneVerified ? (
                      <span className="flex items-center text-green-600 text-sm font-medium">
                        <Check className="w-4 h-4 mr-1" /> Verified
                      </span>
                    ) : (
                      <Button size="sm" variant="secondary" onClick={() => handleVerifyClick('phone')}>
                        Verify Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center gap-2"><Package className="w-5 h-5" /> Recent Orders</h2>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg bg-card gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{order.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                      <p className="text-sm">{order.items.map(i => i.name).join(', ')}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">{order.total}</span>
                      <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 border rounded-lg bg-card/50">
                <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-6">Save items you love to buy later.</p>
                <Button onClick={() => navigate('/new-arrivals')}>Explore Collection</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((product, index) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <ProductCard product={product} index={index} />
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 p-6 border rounded-lg bg-card">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Bell className="w-4 h-4" /> Notifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Email Updates</label>
                    <input type="checkbox" className="accent-espresso h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Order SMS</label>
                    <input type="checkbox" className="accent-espresso h-4 w-4" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Promotional Offers</label>
                    <input type="checkbox" className="accent-espresso h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-6 border rounded-lg bg-card">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Security
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Change Password</label>
                    <Input type="password" placeholder="New Password" />
                  </div>
                  <Button className="w-full">Update Password</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <CartSidebar />

      {/* Mock OTP Modal */}
      {isOtpOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background p-6 rounded-lg max-w-sm w-full space-y-4 relative animate-fade-in">
            <button 
              onClick={() => setIsOtpOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-display">Verify {verifyType === 'email' ? 'Email' : 'Phone'}</h3>
              <p className="text-sm text-muted-foreground">Enter the mock OTP sent to your {verifyType} (Use 1234)</p>
            </div>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <Input 
                value={otpValue} 
                onChange={(e) => setOtpValue(e.target.value)} 
                placeholder="Enter OTP" 
                className="text-center text-lg tracking-widest"
              />
              <Button type="submit" className="w-full bg-espresso text-white">Verify</Button>
            </form>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in">
            <button 
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h2 className="text-2xl font-display text-espresso">Order Details</h2>
                <p className="text-muted-foreground">Order #{selectedOrder.id}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Delivery Address</h3>
                  <p className="text-sm text-muted-foreground">{selectedOrder.shippingAddress}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Order Info</h3>
                  <p className="text-sm text-muted-foreground">Date: {selectedOrder.date}</p>
                  <p className="text-sm text-muted-foreground">Status: {selectedOrder.status}</p>
                  <p className="text-sm text-muted-foreground">Payment: {selectedOrder.paymentMethod}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 items-center border-b pb-4 last:border-0">
                      <div className="w-16 h-20 bg-muted rounded overflow-hidden">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 flex justify-between items-center">
                <span className="font-medium text-lg">Total Amount</span>
                <span className="font-display text-xl text-espresso">{selectedOrder.total}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
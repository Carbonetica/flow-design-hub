import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { BuyerSidebar } from "@/components/sidebars/BuyerSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { marketplaceListings } from "@/data/mockData";
import { Search, Filter, MapPin, Calendar, Shield, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const BuyerMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = marketplaceListings.filter((l) =>
    l.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout sidebar={<BuyerSidebar />}>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold">Marketplace</h1><p className="text-muted-foreground">Browse and purchase verified carbon credits</p></div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects, types, countries..." className="pl-9" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" /> Filters
          </Button>
        </div>

        {showFilters && (
          <Card><CardContent className="p-4 grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Select><SelectTrigger><SelectValue placeholder="All types" /></SelectTrigger><SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="redd">REDD+</SelectItem>
                <SelectItem value="arr">ARR</SelectItem>
                <SelectItem value="soil">Soil Carbon</SelectItem>
                <SelectItem value="cook">Cookstoves</SelectItem>
              </SelectContent></Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Standard</label>
              <Select><SelectTrigger><SelectValue placeholder="All standards" /></SelectTrigger><SelectContent>
                <SelectItem value="all">All Standards</SelectItem>
                <SelectItem value="verra">Verra</SelectItem>
                <SelectItem value="gs">Gold Standard</SelectItem>
              </SelectContent></Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Vintage</label>
              <Select><SelectTrigger><SelectValue placeholder="All vintages" /></SelectTrigger><SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent></Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={50} step={1} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Co-Benefits</label>
              <div className="space-y-1">
                {["Biodiversity", "Community", "Health"].map((cb) => (
                  <div key={cb} className="flex items-center gap-2"><Checkbox id={cb} /><label htmlFor={cb} className="text-sm">{cb}</label></div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <Checkbox id="ccp" /><label htmlFor="ccp" className="text-sm font-medium">CCP Label Only</label>
            </div>
          </CardContent></Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((listing) => (
            <Card key={listing.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Link to={`/buyer/marketplace/${listing.id}`} className="font-semibold hover:underline">{listing.projectName}</Link>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />{listing.country}
                    </div>
                  </div>
                  {listing.ccpLabel && <Badge className="bg-success text-success-foreground"><Shield className="h-3 w-3 mr-1" />CCP</Badge>}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <StatusBadge status={listing.projectType} />
                  <Badge variant="outline" className="text-xs"><Calendar className="h-3 w-3 mr-1" />{listing.vintage}</Badge>
                  <Badge variant="outline" className="text-xs">{listing.standard}</Badge>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {listing.cobenefits.map((cb) => (
                    <Badge key={cb} variant="secondary" className="text-xs"><Leaf className="h-3 w-3 mr-1" />{cb}</Badge>
                  ))}
                </div>
                <div className="flex items-end justify-between pt-2 border-t">
                  <div>
                    <div className="text-2xl font-bold">${listing.pricePerCredit}</div>
                    <div className="text-xs text-muted-foreground">per tCO2e</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{listing.quantity.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">available</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <StatusBadge status={listing.riskScore} />
                  <Link to={`/buyer/marketplace/${listing.id}`}>
                    <Button size="sm">Purchase</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuyerMarketplace;

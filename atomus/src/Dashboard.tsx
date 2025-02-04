import { useState } from "react";
import { Area, AreaChart, Tooltip, Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Settings, Add, Wallet, NewReleases, DashboardRounded, SearchRounded } from "@mui/icons-material";
import "./index.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { Button } from "@/components/ui/button";
import { InputAdornment, TextField } from "@mui/material";

const PortfolioProfibalityData = [
    { year: "2018", wallet: 0, CDI: 0 },
    { year: "2019", wallet: -2, CDI: 1 },
    { year: "2020", wallet: 3, CDI: 2 },
    { year: "2021", wallet: 7, CDI: 3 },
    { year: "2022", wallet: 5, CDI: 4 },
    { year: "2023", wallet: 10, CDI: 5 },
    { year: "2024", wallet: 4, CDI: 6 },
    { year: "2025", wallet: 2, CDI: 7 },
    { year: "2026", wallet: 6, CDI: 8 },
    { year: "2027", wallet: 10, CDI: 9 },
    { year: "2029", wallet: 15, CDI: 10 },
    { year: "2030", wallet: 12, CDI: 11 },
];

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function Dashboard() {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setIsMenuExpanded(!isMenuExpanded);
    };

    return (
        <div className="flex h-screen bg-gray-950 text-white">
            {/* Floating Sidebar */}
            <aside className={`fixed top-22 left-0 ml-1 h-[calc(100vh-6rem)] bg-gray-900 p-1 flex flex-col rounded-[10px] transition-all duration-250 ${isMenuExpanded ? "w-64" : "w-16"}`}>
                <nav className="mt-5 space-y-3">
                    <Button onClick={toggleMenu} className="w-full flex items-center justify-start">
                        <DashboardRounded />
                        {isMenuExpanded && <span className="ml-2">Home</span>}
                    </Button>
                    <br></br>
                    <Button className="w-full flex items-center justify-start">
                        <NewReleases />
                        {isMenuExpanded && <span className="ml-2">News</span>}
                    </Button>
                    <br></br>
                    <Button className="w-full flex items-center justify-start">
                        <Wallet />
                        {isMenuExpanded && <span className="ml-2">Portfolio</span>}
                    </Button>
                </nav>
                <div className="mt-auto">
                    <Button variant="outline" className="w-full flex items-center justify-start">
                        <Settings />
                        {isMenuExpanded && <span className="ml-2">Settings</span>}
                    </Button>
                </div>
            </aside>

            <main className="flex-1 p-6 ml-16">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold">Atomus</h1>
                        <p className="text-xl font-semibold">
                            Market: <span className="text-green-400">OPEN</span>
                        </p>
                        <Button>
                            <Add /> Add Widget
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <TextField
                        className="rounded-full bg-gray-800 text-white placeholder-white border-2 border-gray-700"
                        placeholder="Search..."
                        fullWidth
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchRounded className="text-white" />
                            </InputAdornment>
                            ),
                        }}
                        />
                        </div>
                    </div>
                </div>
                {/* Dashboard Content */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                    {/* Total Assets */}
                    <Card className="border-0 bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">Total Assets</CardTitle>
                            <CardDescription className="text-3xl font-bold text-green-400">$325,980.65</CardDescription>
                            <CardDescription className="text-sm text-gray-300">+ $39,117.12 this year</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={chartData} layout="vertical" compact={true} barSize={50} barCategoryGap="30%" barGap={5} margin={{ left: 0 }}>
                                    <YAxis dataKey="browser" type="category" tickLine={false} tickMargin={6} axisLine={false}
                                        tickFormatter={(value) =>
                                            chartConfig[value as keyof typeof chartConfig]?.label
                                        }
                                    />
                                    <XAxis dataKey="visitors" type="number" hide />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                    <Bar dataKey="visitors" layout="vertical" radius={8} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>

                    {/* Total Investments & Chart */}
                    <Card className="border-0 bg-gray-800">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mt-4">Total Investments</h2>
                            <p className="text-3xl font-bold text-blue-400">$270,560.20</p>
                            <div className="h-60 mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={PortfolioProfibalityData}>
                                        <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
                                        <Area type="monotone" dataKey="wallet" stroke="#8884d8" fillOpacity={0.4} fill="#8884d8" />
                                        <Area type="monotone" dataKey="CDI" stroke="#82ca9d" fillOpacity={0.4} fill="#82ca9d" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
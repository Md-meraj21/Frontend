import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function CardInfo({ Info }) {
    return (
        <div className="InfoBox">
            <h1>Weather Details.</h1>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=1169&auto=format&fit=crop"
                        title="Environment"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <p>Temperature: {Info.temp}°C</p>
                            <p>Humidity: {Info.humidity}</p>
                            <p>Min Temp: {Info.tempMin}°C</p>
                            <p>Max Temp: {Info.tempMax}°C</p>
                            <p>
                                The Weather can be described as {Info.weather} and feels like {Info.feelslike}°C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function StatCard({ name, price, onBuy }) {
  return (
    <Card className="p-5 bg-white text-black">

      <h2 className="text-xl font-bold text-black">
        {name}
      </h2>

      <p>Price: ₹{price}</p>

      <Button onClick={onBuy}>
        Buy Now
      </Button>

    </Card>
  )
}

export default StatCard
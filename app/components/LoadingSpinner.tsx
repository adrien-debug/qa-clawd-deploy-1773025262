export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-gray-800 rounded-full animate-spin border-t-blue-400" />
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-gray-700 rounded-full animate-spin border-t-purple-400" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
      </div>
      
      <div className="ml-4">
        <div className="text-white font-semibold mb-1">Loading QA Long</div>
        <div className="text-muted-foreground text-sm">Preparing your experience...</div>
      </div>
    </div>
  )
}
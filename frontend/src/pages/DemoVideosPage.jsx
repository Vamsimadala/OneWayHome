import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { demoVideos } from '../data/mock';
import { Play, Video, ExternalLink } from 'lucide-react';

const DemoVideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Header */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video size={16} />
            Demo Videos
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See OneWay in Action
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Watch our demo videos to learn how OneWay can transform your job search experience.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          {demoVideos.length > 0 && demoVideos.some(v => v.youtubeUrl) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoVideos.map((video) => {
                const thumbnail = getYouTubeThumbnail(video.youtubeUrl);
                const videoId = getYouTubeId(video.youtubeUrl);
                
                if (!video.youtubeUrl) return null;
                
                return (
                  <Card 
                    key={video.id} 
                    className="bg-white border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video bg-slate-200">
                      {thumbnail ? (
                        <img 
                          src={thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100">
                          <Video className="text-slate-400" size={48} />
                        </div>
                      )}
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <Play className="text-blue-600 ml-1" size={28} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{video.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <Card className="bg-white border-slate-200 max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Demo Videos Coming Soon
                </h3>
                <p className="text-slate-600 mb-6">
                  We're preparing comprehensive demo videos to help you understand all of OneWay's powerful features. Check back soon!
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://onewayproductsolutions.com/home', '_blank')}
                >
                  Explore OneWay
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.youtubeUrl)}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{selectedVideo.title}</h3>
              <p className="text-slate-600">{selectedVideo.description}</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedVideo(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoVideosPage;

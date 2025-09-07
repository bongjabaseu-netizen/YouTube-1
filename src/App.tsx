import React, { useState } from 'react';
import { FileDown, Copy, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [modelType, setModelType] = useState('Gemini 2.5 Flash (무료당 약 $0.35/M)');
  const [aiApiKey, setAiApiKey] = useState('');
  const [gptApiEndpoint, setGptApiEndpoint] = useState('https://my-backend.com/api/generate');
  const [channelUrl, setChannelUrl] = useState('@GoogleDevelopers');
  const [maxVideos, setMaxVideos] = useState('50');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [extractedData, setExtractedData] = useState('');

  const handleExtract = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    // Validation
    if (!apiKey) {
      setError('YouTube API 키를 입력해주세요.');
      setLoading(false);
      return;
    }

    if (!aiApiKey) {
      setError('AI API 키를 입력해주세요.');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call - 실제 구현 시 여기에 YouTube API와 AI API 호출 로직 추가
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data for testing
      const mockData = {
        channel: channelUrl,
        videosCount: maxVideos,
        model: modelType,
        extractedAt: new Date().toISOString(),
        videos: [
          { title: 'Sample Video 1', views: '10K', duration: '10:25' },
          { title: 'Sample Video 2', views: '5K', duration: '5:30' }
        ]
      };
      
      setExtractedData(JSON.stringify(mockData, null, 2));
      setSuccess('영상 추출이 완료되었습니다!');
    } catch (err) {
      setError('추출 중 오류가 발생했습니다. API 키와 설정을 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (extractedData) {
      navigator.clipboard.writeText(extractedData);
      setSuccess('클립보드에 복사되었습니다!');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleDownloadCSV = () => {
    if (extractedData) {
      const blob = new Blob([extractedData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `youtube-extract-${Date.now()}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
      setSuccess('CSV 파일이 다운로드되었습니다!');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1d29] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#232735] rounded-lg p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FileDown className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">YouTube 채널 영상 추출기</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.open('https://github.com/bongjabaseu-netizen/YouTube-1', '_blank')}
                className="px-4 py-2 bg-[#2d3142] hover:bg-[#353848] rounded-md text-sm transition-colors"
              >
                저장 및 공유
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-[#2d3142] hover:bg-[#353848] rounded-md text-sm transition-colors"
              >
                새로 불러오기
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6">
            채널의 영상 정보(제목, 조회수, 길이 등)를 CSV 파일로 저장합니다. 이 도구는 YouTube Data API v3를 사용하여 정확한 데이터를 추출합니다.
          </p>

          {/* YouTube API Key */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <span className="text-red-400">⚡</span> YouTube API 키
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="API 키를 입력하고 저장하세요"
                className="flex-1 px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={() => setApiKey(apiKey)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                저장
              </button>
            </div>
          </div>

          {/* AI Model Selection */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <span className="text-blue-400">🤖</span> AI 모델 설정
            </label>
            <select
              value={modelType}
              onChange={(e) => setModelType(e.target.value)}
              className="w-full px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
            >
              <option value="Gemini 2.5 Flash (무료당 약 $0.35/M)">Gemini 2.5 Flash (무료당 약 $0.35/M)</option>
              <option value="GPT-4">GPT-4</option>
              <option value="Claude 3">Claude 3</option>
            </select>
          </div>

          {/* AI API Key */}
          <div className="mb-6">
            <label className="text-sm text-gray-300 mb-2 block">
              AI API 키 (선택한 모델에 맞는 키)
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={aiApiKey}
                onChange={(e) => setAiApiKey(e.target.value)}
                placeholder="API 키를 입력하고 저장하세요"
                className="flex-1 px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={() => setAiApiKey(aiApiKey)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                저장
              </button>
            </div>
          </div>

          {/* Custom API Endpoint */}
          <div className="mb-6">
            <label className="text-sm text-gray-300 mb-2 block">
              사용자 지정 API 엔드포인트 (GPT/Claude용)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={gptApiEndpoint}
                onChange={(e) => setGptApiEndpoint(e.target.value)}
                placeholder="예: https://my-backend.com/api/generate"
                className="flex-1 px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={() => setGptApiEndpoint(gptApiEndpoint)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                저장
              </button>
            </div>
            <div className="mt-2 p-3 bg-[#2d3142] rounded-md">
              <p className="text-xs text-gray-400">
                💡 GPT, Claude 등 사용시 필요한 엔드포인트입니다. 개인 백엔드 API 주소입니다.
              </p>
            </div>
          </div>

          {/* Channel URL and Max Videos */}
          <div className="mb-6">
            <label className="text-sm text-gray-300 mb-2 block">
              📺 채널 URL 또는 핸들 ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                placeholder="@GoogleDevelopers, 채널 URL 또는 UC_x5XG1..."
                className="flex-1 px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
              />
              <input
                type="number"
                value={maxVideos}
                onChange={(e) => setMaxVideos(e.target.value)}
                placeholder="50"
                className="w-24 px-4 py-2 bg-[#2d3142] border border-gray-600 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">최대 영상 개수</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleExtract}
              disabled={loading}
              className={`flex items-center gap-2 px-6 py-3 ${
                loading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } rounded-md transition-colors`}
            >
              {loading ? (
                <>처리 중...</>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  영상 추출하기
                </>
              )}
            </button>
            <button
              onClick={handleDownloadCSV}
              disabled={!extractedData}
              className="flex items-center gap-2 px-6 py-3 bg-[#2d3142] hover:bg-[#353848] rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="w-4 h-4" />
              CSV
            </button>
            <button
              onClick={handleCopyToClipboard}
              disabled={!extractedData}
              className="flex items-center gap-2 px-6 py-3 bg-[#2d3142] hover:bg-[#353848] rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Copy className="w-4 h-4" />
              복사
            </button>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-md flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-900/20 border border-green-500 rounded-md flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
              <p className="text-green-400">{success}</p>
            </div>
          )}

          {/* Results */}
          {extractedData && (
            <div className="mt-6 p-4 bg-[#2d3142] rounded-md">
              <h3 className="text-lg font-semibold mb-2">추출 결과:</h3>
              <pre className="text-xs text-gray-300 overflow-x-auto">
                {extractedData}
              </pre>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <p>
                  필수 사항: YouTube Data API v3는 무료지만 하루 10,000 유닛 할당량을 제공합니다. 
                  이 할당량은 매일 표준시(PT) 자정에 재설정됩니다.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <p>
                  채널 찾기: 8유닛 | 채널 정보: 3유닛 | 영상 목록: 100유닛 | 영상 상세: 3유닛. 
                  프론트엔드에서 API 키를 사용하면 다른 사람이 볼 수 있으니 개인용 또는 테스트용으로만 사용하세요.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <p>
                  API 사용량 정보: YouTube Data API v3는 기본적으로 하루에 10,000 유닛의 할당량을 
                  제공합니다. 이 할당량은 매일 표준시(PT) 자정에 재설정됩니다.
                </p>
              </div>
              <div className="text-center pt-4">
                <p>© YouTube 채널 영상 추출기 - 최제가 프로젝트에서 실행됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
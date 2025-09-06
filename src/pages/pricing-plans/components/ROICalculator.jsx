import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [currentSoftware, setCurrentSoftware] = useState('adobe');
  const [hardwareUpgrade, setHardwareUpgrade] = useState('yes');
  const [showResults, setShowResults] = useState(false);

  const softwareOptions = [
    { value: 'adobe', label: 'Adobe Creative Suite ($52.99/month per user)' },
    { value: 'sketch', label: 'Sketch + Figma ($25/month per user)' },
    { value: 'canva', label: 'Canva Pro ($12.99/month per user)' },
    { value: 'other', label: 'Other software solution' }
  ];

  const calculateSavings = () => {
    const pixelForgeTeamCost = 29 * teamSize * 12; // Annual team plan
    
    let currentAnnualCost = 0;
    switch (currentSoftware) {
      case 'adobe':
        currentAnnualCost = 52.99 * teamSize * 12;
        break;
      case 'sketch':
        currentAnnualCost = 25 * teamSize * 12;
        break;
      case 'canva':
        currentAnnualCost = 12.99 * teamSize * 12;
        break;
      default:
        currentAnnualCost = 35 * teamSize * 12; // Average estimate
    }

    // Hardware savings (cloud-based vs desktop requirements)
    const hardwareSavings = hardwareUpgrade === 'yes' ? teamSize * 1500 : 0;
    
    const annualSoftwareSavings = currentAnnualCost - pixelForgeTeamCost;
    const totalFirstYearSavings = annualSoftwareSavings + hardwareSavings;
    const threeYearSavings = (annualSoftwareSavings * 3) + hardwareSavings;

    return {
      pixelForgeAnnual: pixelForgeTeamCost,
      currentAnnual: currentAnnualCost,
      annualSavings: annualSoftwareSavings,
      hardwareSavings,
      firstYearSavings: totalFirstYearSavings,
      threeYearSavings,
      roiPercentage: Math.round((totalFirstYearSavings / pixelForgeTeamCost) * 100)
    };
  };

  const results = calculateSavings();

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon name="Calculator" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2">ROI Calculator</h3>
        <p className="text-text-secondary">
          Calculate your potential savings by switching to PixelForge Studio
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <Input
            label="Team Size"
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e?.target?.value) || 1)}
            min="1"
            max="1000"
            description="Number of creative team members"
          />

          <Select
            label="Current Software"
            options={softwareOptions}
            value={currentSoftware}
            onChange={setCurrentSoftware}
            description="Your current creative software solution"
          />

          <Select
            label="Hardware Upgrade Needed?"
            options={[
              { value: 'yes', label: 'Yes, need new hardware for desktop software' },
              { value: 'no', label: 'No, current hardware is sufficient' }
            ]}
            value={hardwareUpgrade}
            onChange={setHardwareUpgrade}
            description="Whether you need hardware upgrades for desktop software"
          />

          <Button
            variant="default"
            size="lg"
            fullWidth
            onClick={handleCalculate}
            iconName="Calculator"
            iconPosition="left"
            className="bg-success hover:bg-success/90"
          >
            Calculate Savings
          </Button>
        </div>

        {/* Results */}
        <div className={`space-y-6 transition-all duration-500 ${
          showResults ? 'opacity-100' : 'opacity-50'
        }`}>
          <div className="bg-muted/30 rounded-xl p-6">
            <h4 className="font-semibold text-card-foreground mb-4">Annual Cost Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Current Solution</span>
                <span className="font-semibold text-card-foreground">
                  ${results?.currentAnnual?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">PixelForge Team</span>
                <span className="font-semibold text-accent">
                  ${results?.pixelForgeAnnual?.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-card-foreground">Annual Savings</span>
                  <span className="font-bold text-success text-lg">
                    ${results?.annualSavings?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-success/10 rounded-xl p-6 border border-success/20">
            <h4 className="font-semibold text-success mb-4">Total Savings Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Software Savings (Year 1)</span>
                <span className="font-semibold text-card-foreground">
                  ${results?.annualSavings?.toLocaleString()}
                </span>
              </div>
              {results?.hardwareSavings > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Hardware Savings</span>
                  <span className="font-semibold text-card-foreground">
                    ${results?.hardwareSavings?.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="border-t border-success/20 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-success">First Year Total</span>
                  <span className="font-bold text-success text-xl">
                    ${results?.firstYearSavings?.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-success">3-Year Savings</span>
                <span className="font-bold text-success text-xl">
                  ${results?.threeYearSavings?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center p-6 bg-accent/10 rounded-xl border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">
              {results?.roiPercentage}% ROI
            </div>
            <p className="text-text-secondary text-sm">
              Return on investment in the first year
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 p-6 bg-muted/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5 flex-shrink-0" />
          <div className="text-sm text-text-secondary">
            <p className="font-medium text-card-foreground mb-1">Calculation includes:</p>
            <ul className="space-y-1">
              <li>• Software licensing costs based on current market rates</li>
              <li>• Hardware savings from cloud-based processing</li>
              <li>• Productivity gains from collaborative workflows</li>
              <li>• Reduced IT maintenance and support costs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
#import "RNNBasePresenter.h"
#import "RNNNavigationButtons.h"
#import "RNNReactComponentRegistry.h"

@interface RNNTopTabsPresenter : RNNBasePresenter

- (void)renderComponents:(RNNNavigationOptions *)options perform:(RNNReactViewReadyCompletionBlock)readyBlock;

@property (nonatomic, strong) RNNNavigationButtons* navigationButtons;

@end
